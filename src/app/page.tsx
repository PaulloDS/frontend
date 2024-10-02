import ProdutoItem from "@/components/produto/ProdutoItem";
import Cabecalho from "@/components/template/Cabecalho";
import Rodape from "@/components/template/Rodape";
import { produtos } from "@/core";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <div className="grid grid-cols-4 container">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
      <Rodape />
    </>
  );
}
