const glslCode = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec4 Line(vec2 uv, float speed, float height, vec3 col) {
    uv.y += smoothstep(1., 0., abs(uv.x)) * sin(u_time * speed + uv.x * height) * .2;
    return vec4(smoothstep(.06 * smoothstep(.2, .9, abs(uv.x)), 0., abs(uv.y) - .004) * col, 1.0) * smoothstep(1., .3, abs(uv.x));
}

void main(){
  vec2 st = gl_FragCoord.xy / u_resolution;
  st = (gl_FragCoord.xy - 0.5 * u_resolution.xy)/u_resolution.y;
  vec4 O = vec4 (0.0);
  for (float i = 0.; i <= 10.; i += 1.) {
      float t = i / 5.;
      O += Line(st, 1. + t, 4. + t, vec3(.2 + t * .7, .2 + t * .4, 0.3));
  }
  gl_FragColor = O;
}
`
export default glslCode;