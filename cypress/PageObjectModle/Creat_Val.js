import home_page from "./home_page"
const home_page_obj = new home_page()

class Creat_Val { 

  Createval(){
      home_page_obj.new_validation_btn.click()
      home_page_obj.validation_name.type(fixture.new_validation_data.validation_name)
      home_page_obj.testing_protocol_btn.click()
      home_page_obj.equipment_type.type(nv_data.ref_equip_type+"{enter}")
      home_page_obj.equipment_id.type(nv_data.equipment_id+"{enter}")
      home_page_obj.initiate_qual_btn.click()
    }
  }
export default Creat_Val