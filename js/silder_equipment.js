let imgs2 = [
	'../images/equipment/LSYY_equipment_1000X750_1.jpg',
	'../images/equipment/LSYY_equipment_1000X750_2.jpg',
	'../images/equipment/LSYY_equipment_1000X750_3.jpg',
]
let index_equipment = 0
function changeSilderEquipment() {
	document.getElementById('imgEquipment').src = imgs2[index_equipment]
	index_equipment++
	if (index_equipment > 2) {
		index_equipment = 0
	}
}
setInterval('changeSilderEquipment()', 3000)
