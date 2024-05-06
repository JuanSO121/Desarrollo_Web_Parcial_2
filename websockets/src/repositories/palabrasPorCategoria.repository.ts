import { EntityRepository, Repository,getManager  } from "typeorm";
import { PalabrasPorCategoria } from "../entity/PalabrasPorCategoria.entity";

@EntityRepository(PalabrasPorCategoria)
export class PalabrasPorCategoriaRepository extends Repository<PalabrasPorCategoria> {

  async associateWordsToCategory(cate_id: number, pala_ids: number[]) {
    const palabrasPorCategoria = pala_ids.map(pala_id => {
      let ppc = new PalabrasPorCategoria();
      ppc.categoria = {cate_id} as any;
      ppc.palabra = {pala_id} as any;
      return ppc;
    });
    return this.save(palabrasPorCategoria);
  }

  async disassociateWordsFromCategory(cate_id: number, pala_ids: number[]) {
    const entityManager = getManager();
    return entityManager
      .createQueryBuilder()
      .delete()
      .from(PalabrasPorCategoria)
      .where("cate_id = :cate_id", { cate_id })
      .andWhere("pala_id IN (:...pala_ids)", { pala_ids })
      .execute();
  }
}
