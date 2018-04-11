const table = $('#pixelcanvas');
const  input_height= $('#height');
const input_width = $('#width');




function makeGrid(){
	table.empty();
	const height = parseInt(input_height.val());
	const width = parseInt(input_width.val()); 

	for (let row = 0; row < height; row++) {
		const tr = $('<tr></tr>');
		for(let cell =0; cell < width;cell++ ){
			tr.append(`<td></td>`);
		}
		table.append(tr);
	}
	//add color 
	$('td').click(function(){
	$(this).css('background-color',$('#colorpicker').val());
	
});
	
  


}







// function fillSquare() {
//     $(this).css('background-color', $('#colorPicker').val())
//   }



