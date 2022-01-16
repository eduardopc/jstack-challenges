// quando não utilizamos o babel para transpilar o código js e queremos utilizar
// js modules (import/export default) é necessário add a extensão .mjs no final dos arquivos

//ou

// criar no package.json a propriedade type e setar como module ao invés do commonjs

import sayHello, { sayHello2 as novoNome } from "./sayHello.mjs";

sayHello("Arthur");
novoNome("Eduardo");
