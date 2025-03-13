/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const infoJson = {
			contact: {
				email: "contato@evailson.dev",
				discord: "https://discord.com/users/394131988023476235",
			},
			links: {
				linkedin: "https://www.linkedin.com/in/evailson/",
				github: "https://github.com/vavarine",
				portfolio: "https://github.com/vavarine",
			},
			workExperience: [
				{
					company: {
						name: "e-Plus",
						url: "https://www.agenciaeplus.com.br/",
					},
					role: "Desenvolvedor Full Stack Web Pleno",
					description: "Desenvolvedor Full Stack Web Pleno",
					period: {
						start: "2021-01-01",
						end: null,
					},
				}
			],
			academicBackground: [
				{
					degree: "Pós-graduação em Arquitetura de Software",
					institution: "FIAP",
					period: {
						start: "2025-03-01",
						end: null,
					},
				},
				{
					degree: "Análise e Desenvolvimento de Sistemas",
					institution: "Fatec São Caetano do Sul",
					period: {
						start: "2019-01-01",
						end: "2022-01-01",
					},
				},
				{
					degree: "Técnico em Análise e Desenvolvimento de Sistemas",
					institution: "Etec Mauá",
					period: {
						start: "2018-01-01",
						end: "2019-06-01",
					},
				},
				{
					degree: "Técnico em Administração",
					institution: "Etec Mauá",
					period: {
						start: "2017-01-01",
						end: "2018-06-01",
					},
				}
			],
			languages: [
				"English",
				"Portuguese",
			],
			location: {
				country: "Brazil",
				state: "São Paulo",
				city: "São Paulo",
			},
		}

		return new Response(JSON.stringify(infoJson), {
			headers: {
				"Content-Type": "application/json",
			},
		});
	},
} satisfies ExportedHandler<Env>;
