const glslCode = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define AA 2.0

vec3 background(vec3 d) {
  float light = dot(d, sqrt(vec3(.3, .5, .2)));
  return vec3(max(light * .5 + .5, .0));
}

float smin(float d1, float d2) {
  const float e = -6.;
  return log(exp(d1 * e) + exp(d2 * e)) / e;
}

float dist(vec3 p) {
  float l = pow(dot(p.xz, p.xz), .8);
  float ripple = p.y + .8 + .4 * sin(l * 3. - u_time + .5) / (1. + l);
  float h1 = -sin(u_time);
  float h2 = cos(u_time + .1);
  float drop = length(p + vec3(0, 1.2, 0) * h1) - .4;
  drop = smin(drop, length(p + vec3(.1, .8, 0) * h2) - .2);
  return smin(ripple, drop);
}

vec3 normal(vec3 p) {
  vec2 e = vec2(1, -1) * .01;
  return normalize(dist(p - e.yxx) * e.yxx + dist(p - e.xyx) * e.xyx +
    dist(p - e.xxy) * e.xxy + dist(p - e.y) * e.y);
}

vec4 march(vec3 p, vec3 d) {
  vec4 m = vec4(p, 0);
  for(int i = 0; i < 99; i++) {
    float s = dist(m.xyz);
    m += vec4(d, 1) * s;
    if(s < .01 || m.w > 20.)
      break;
  }
  return m;
}

void main() {
  vec2 res = u_resolution.xy;
  vec3 col = vec3(0);

  vec3 pos = vec3(.05 * cos(u_time), .1 * sin(u_time), -4);
  vec3 lig = sqrt(vec3(.3, .5, .2));

    //Sample
  for(float x = 0.0; x < AA; x++) for(float y = 0.0; y < AA; y++) {
      vec3 ray = normalize(vec3(gl_FragCoord.xy - res / 2. + vec2(x, y) / AA, res.y));
      vec4 mar = march(pos, ray);
      vec3 nor = normal(mar.xyz);
      vec3 ref = refract(ray, nor, .75);
      float r = smoothstep(.8, 1., dot(reflect(ray, nor), lig));
      float l = 1. - dot(ray, nor);
      vec3 wat = background(ref) + .3 * r * l * l;
      vec3 bac = background(ray) * .5 + .5;

      float fade = pow(min(mar.w / 20., 1.), .3);
      col += mix(wat, bac, fade);
    }
  col /= AA * AA;

  gl_FragColor = vec4(col * col, 1);
}
`;

export default glslCode;