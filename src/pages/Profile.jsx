// import React from 'react';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import FormInput from '../components/FormInput';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Esquema de validação usando Yup
// const validationSchema = Yup.object().shape({
//   nome: Yup.string().required('Nome obrigatório'),
//   sobrenome: Yup.string().required('Sobrenome obrigatório'),
//   email: Yup.string().email('Email inválido').required('Email obrigatório'),
//   cpf: Yup.string().required('CPF obrigatório')
// });

// const Profile = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (values, { setSubmitting }) => {
//     toast.success("Dados salvos com sucesso!");
//     setTimeout(() => {
//       navigate('/home'); // Navega para a página Home após o sucesso
//       setSubmitting(false);
//     }, 2000); // Delay para permitir que a mensagem de toast seja lida
//   };

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto px-4 py-6">
//         <h1 className="text-4xl font-semibold text-teal-500 mb-6">Perfil do Usuário</h1>
//         <Formik
//           initialValues={{ nome: '', sobrenome: '', email: '', cpf: '', photo: null }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ setFieldValue }) => (
//             <Form className="bg-white p-6 shadow-lg rounded space-y-4">
//               <FormInput name="nome" label="Nome" />
//               <FormInput name="sobrenome" label="Sobrenome" />
//               <FormInput name="email" label="Email" type="email" />
//               <FormInput name="cpf" label="CPF" />
//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Foto do Usuário
//                 </label>
//                 <input
//                   type="file"
//                   onChange={(event) => setFieldValue("photo", event.currentTarget.files[0])}
//                   className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                 Salvar Alterações
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//       <Footer />
//       <ToastContainer position="top-center" autoClose={5000} />
//     </>
//   );
// };

// export default Profile;
