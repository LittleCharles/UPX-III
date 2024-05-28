import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export function FormEdit() {
  const handleFormSubmit = () => {
    toast.success("O produto foi Editado com sucesso!");
  };

  const ProductSchema = Yup.object().shape({
    imagens: Yup.array().required("Campo obrigatório"),
    nome: Yup.string().required("Campo obrigatório"),
    marca: Yup.string().required("Campo obrigatório"),
    tamanho: Yup.string().required("Campo obrigatório"),
    cor: Yup.string().required("Campo obrigatório"),
    genero: Yup.string().required("Campo obrigatório"),
    tipo: Yup.string().required("Campo obrigatório"),
    descricao: Yup.string().required("Campo obrigatório"),
  });

  return (
    <Formik
      initialValues={{
        imagens: [],
        nome: "LC",
        marca: "AAAA",
        tamanho: "",
        cor: "",
        genero: "",
        tipo: "",
        descricao: "",
      }}
      validationSchema={ProductSchema}
      onSubmit={handleFormSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="w-full">
          <div className="mb-4 w-full">
            <Label htmlFor="imagens" className="block text-sm font-medium text-gray-700 w-full">
              Imagens do Produto
            </Label>
            <Input
              type="file"
              id="imagens"
              accept="image/*, application/pdf"
              multiple
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(event) => {
                const files = Array.from(event.currentTarget.files);
                setFieldValue("imagens", files);
              }}
            />
            <ErrorMessage name="imagens" component="p" className="text-red-500 text-xs italic" />
          </div>
          <div className="w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <div className="mb-4 w-full">
              <Label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                Nome do Produto
              </Label>
              <Field
                as={Input}
                type="text"
                id="nome"
                name="nome"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="nome"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4 w-full">
              <Label
                htmlFor="marca"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                Marca
              </Label>
              <Field
                as={Input}
                type="text"
                id="marca"
                name="marca"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="marca"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
          </div>

          <div className="w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <div className="mb-4 w-full">
              <Label
                htmlFor="tamanho"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                Tamanho
              </Label>
              <Field
                as={Input}
                type="text"
                id="tamanho"
                name="tamanho"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="tamanho"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-4 w-full">
              <Label
                htmlFor="cor"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                Cor
              </Label>
              <Field
                as={Input}
                type="text"
                id="cor"
                name="cor"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="cor"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
          </div>

          <div className="w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <div className="mb-4 w-full">
              <Label
                htmlFor="genero"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                Gênero
              </Label>
              <Select
                value={values.genero}
                onValueChange={(value) => setFieldValue("genero", value)}
              >
                <SelectTrigger className="mt-1 p-2 w-full border rounded-md">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="feminino">Feminino</SelectItem>
                  <SelectItem value="unissex">Unissex</SelectItem>
                </SelectContent>
              </Select>
              <ErrorMessage
                name="genero"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4 w-full">
              <Label
                htmlFor="tipo"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                Tipo
              </Label>
              <Select
                value={values.tipo}
                onValueChange={(value) => setFieldValue("tipo", value)}
              >
                <SelectTrigger className="mt-1 p-2 w-full border rounded-md">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="calca">Calça</SelectItem>
                  <SelectItem value="camiseta">Camiseta</SelectItem>
                  <SelectItem value="tenis">Tenis</SelectItem>
                  <SelectItem value="acessorio">Acessório</SelectItem>
                </SelectContent>
              </Select>
              <ErrorMessage
                name="tipo"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
          </div>

          <div className="mb-4 w-full">
            <Label
              htmlFor="descricao"
              className="block text-sm font-medium text-gray-700 w-full mb-1"
            >
              Descrição
            </Label>
            <Field
              as={Textarea}
              id="descricao"
              name="descricao"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="descricao"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>

          <Button type="submit" className="w-full">
            Cadastrar Produto
          </Button>
        </Form>
      )}
    </Formik>
  );
}
