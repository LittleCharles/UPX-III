import FormInput from './FormInput';
import React, { useState } from 'react';
//import {toast} from 'react-toastify' ;
import './stylesheet.css';
import { useNavigate } from "react-router-dom";


export function ProfilePage()
{
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [endereco, setEndereco] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [telefone, setTelefone] = useState();
  const[email, setEmail] = useState();
  const[cpf, setCpf] = useState();
  const [bio, setBio] = useState();
  

 function alterarNome(e){
  setNome(e.target.value);
 }

 function alterarEndereco(e){
  setEndereco(e.target.value);
}

function alterarCidade(e){
  setCidade(e.target.value);
}
function alterarEstado(e){
  setEstado(e.target.value);
}

function alterarTelefone(e){
  setTelefone(e.target.value);
}

function alterarEmail(e){
  setEmail(e.target.value);
}

function alterarCpf(e){
  setCpf(e.target.value);
}

function alterarBio(e){
  setBio(e.target.value);
}

function alterarSobrenome(e){
  setSobrenome(e.target.value);
}
  return (
    
    <div className='profile'>
      <div className='bio'>
        <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-marquee-mobile-2x?$pjpeg$&jpegSize=100&wid=600"/>
        <h1>{nome}</h1>
        <p>{bio}</p> 
      </div>
      
      <div className='formulario'>
        
      <p className='Informacoes'>Informações pessoais</p>

    <div className='formTwocollum'>
          <FormInput label="Nome" value={nome} onChange={alterarNome}/>
          <FormInput label="Sobrenome " value={sobrenome} onChange={alterarSobrenome}/>
          <FormInput label= "Email" value ={email} type="Email" onChange = {alterarEmail}/>
          <FormInput label="Telefone"  value={telefone} type="Number" onChange = {alterarTelefone}/>
          <FormInput label="Endereco" value={endereco} onChange = {alterarEndereco}/>
          <FormInput label="Cidade"  value={cidade} onChange = {alterarCidade}/>
          <FormInput label="Estado" value={estado} onChange = {alterarEstado}/>
          <FormInput label= "CPF" value ={cpf} onChange = {alterarCpf}/>
          </div>

        

          <div className='formTwocollum'>
          
         
          <div className='bioLabel'>
          <FormInput label="Bio" value={bio} onChange = {alterarBio}/>
         
          </div>
          </div>
          

         
          <FormInput type="Submit" value= "Salvar"/>

        
       </div> 
    </div>
  );
}








