import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/Inicio.tsx"),route("alfabeto","routes/alfabeto.tsx"),route("frases","routes/frases.tsx"),route("taller","routes/taller.tsx")
] satisfies RouteConfig;
