 import * as yup from 'yup'

 const  MAX_FILE_SIZE = 100 ; //100KB 

 const validFileExtensions = { imagem : [ 'jpg' , 'gif' , 'png' , 'jpeg' , 'svg' , 'webp' ] }; 

 function isValidFileType(fileName, fileType) {
     if (!fileName) return true; // não é necessário validar se não tem arquivo
     const fileExtension = fileName.split(".").pop().toLowerCase();
     return validFileExtensions[fileType].includes(fileExtension);
   }

 const projectFormSchema = yup.object().shape({
     name: yup.string().required('Nome é obrigatório'),
     link: yup.string().required('O link é obrigatório').url('Deve ser uma URL vaálida'),
     description: yup.string().required('A descrição é obrigatória'),
     img: yup
     .mixed()
     .required('A imagem é obrigatória')
     .test('is-valid-type', 'Não é um tipo de imagem válido', (value) =>
       isValidFileType(value && value.name.toLowerCase(), 'imagem')
     )
     .test('is-valid-size', 'O tamanho máximo permitido é 100KB', (value) => {
       if (!value) return true; // Não é necessário validar se não tem arquivo
       const fileSizeKB = value.size / 1024; // Converter de bytes para KB
       return fileSizeKB <= MAX_FILE_SIZE;
     }),
 });

 export default projectFormSchema;
