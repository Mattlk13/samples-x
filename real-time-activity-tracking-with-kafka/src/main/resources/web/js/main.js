!function(){function t(){n.forEach(function(t){var a=e+"?id="+t;$.get(a,function(a){var e=$.parseXML(a);$xml=$(e),count=$xml.find("message").find("count").text(),$("#"+t+" .tile-action .badge").attr("data-badge","null"!=count?count:0)})})}const a="http://localhost:8280/hogwarts/news",e="http://localhost:8280/hogwarts/stats";var n=[];$(".more-news").each(function(){n.push($(this).parent().parent().attr("id"))}),t(),$(".close-modal, .stash-news").click(function(){$(this).closest(".modal").removeClass("active"),t()}),$(".more-news").click(function(){var t=a+"?id="+$(this).parent().parent().attr("id");$.get(t,function(t){var a=$.parseXML(t);$xml=$(a);const e=$("#"+$xml.find("message").find("id").text()+" .tile-title").html(),n=$xml.find("message").find("article").text();$(".modal").addClass("active"),$(".modal-body .header").html(e),$(".modal-body .content").html(n)})})}(jQuery);