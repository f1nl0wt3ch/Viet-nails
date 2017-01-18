/**
 * Created by dinhthinh on 29/11/16.
 */
function varausHallinta() {

   $("#coll-kategoria").find("li").on("tap", function () {
      $(this).data("check", true);
      if ($("#coll-kategoria").find("li").data("check")) {
         $("#coll-kategoria").collapsible("collapse");
         $("#coll-palvelu").collapsible("expand");
      } else {
         $("#coll-palvelu,#coll-tyontekija, #coll-aika, #coll-lomake").find("h1").on("tap", function () {
            $("#coll-palvelu, #coll-tyontekija, #coll-aika, #coll-lomake").collapsible("collapse");
            alert("Aloita valitsemalla kategoria");

         })
      }
   });

   $("#coll-palvelu").on("change", function () {
      $("#coll-palvelu").collapsible("collapse");
      $("#coll-tyontekija").collapsible("expand");
   });
   $("#coll-tyontekija").find("li").on("tap", function () {
      $("#coll-tyontekija").collapsible("collapse");
      $("#coll-aika").collapsible("expand");
   });
   $("#select-tunti, #select-paiva").on("change", function () {
      $("#coll-aika").collapsible("collapse");
      $("#coll-lomake").collapsible("expand");
   })

}




