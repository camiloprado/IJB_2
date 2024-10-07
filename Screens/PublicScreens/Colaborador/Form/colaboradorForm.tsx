import main_imagem from "../../../../assets/images/colaborador/main_imagem.svg";
import "./formStyle.css";

export function ColaboradorForm() {
	return (
		<div className="parent-container">
			<div
				className="main-image-container"
				style={{ backgroundImage: `url(${main_imagem})` }}
			/>
			<div className="yellow-box">
				<form action="">
					<div className="form-group">
						<label htmlFor="nome-completo">Nome completo</label>
						<input type="text" id="nome-completo" name="nome-completo" />
					</div>
					<div className="form-group">
						<label htmlFor="telefone">Telefone</label>
						<input type="tel" id="telefone" name="telefone" />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" />
					</div>
					<div className="form-group">
						<label htmlFor="telefone2">Telefone 2</label>
						<input type="tel" id="telefone2" name="telefone2" />
					</div>
					<div className="form-group">
						<label htmlFor="cpf">CPF</label>
						<input type="text" id="cpf" name="cpf" />
					</div>
					<div className="form-group">
						<label htmlFor="hobby">Hobby</label>
						<input type="text" id="hobby" name="hobby" />
					</div>
					<div className="form-group">
						<label htmlFor="intencao">Intenção</label>
						<input type="text" id="intencao" name="intencao" />
					</div>
					<div className="form-group">
						<label htmlFor="cargo-desejado">Cargo desejado</label>
						<input
							type="text"
							id="cargo-desejado"
							name="cargo-desejado"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="sobre-voce">Sobre você</label>
						<input type="text" id="sobre-voce" name="sobre-voce" />
					</div>
					<div>
						<label htmlFor="">Como descobriu o João de Barro</label>
						<div><input type="checkbox" name="" id="" /> <span>Ja fui ajudado(a) por ela</span></div>
						<div><input type="checkbox" name="" id="" /> <span>Por meio de amigos</span></div>
						<div><input type="checkbox" name="" id="" /> <span>Google</span></div>
						<div><input type="checkbox" name="" id="" /> <span>Instagram</span></div>
						<div><input type="checkbox" name="" id="" /> <span>Facebook</span></div>
						<div><input type="checkbox" name="" id="" /> <span>E-mail marketing</span></div>
						<div><input type="checkbox" name="" id="" /> <span>Outro</span></div>
					</div>
                    <h1>Como gostaria de contribuir?</h1>
                    <div>
                        <label htmlFor="">Doação monetaria</label>
                        <input type="number" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Materiais e quantidade para doação</label>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div>
                        <label htmlFor="">Deseja receber informações sobre os impactos das doações e novidades?</label>
                        <div><input type="checkbox" name="" id="" /> <span>Sim! Desejo receber novidades da João de Barro.</span></div>
                        <div><input type="checkbox" name="" id="" /> <span>Li e aceito as Políticas de Privacidade.</span></div>
                    </div>
				</form>
			</div>
		</div>
	);
}
