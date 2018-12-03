if( $f11['AGE'] >= 12 && $f11['SEX'] == 2 && ( ($this->withmaternal($member) > 0 ) || ( (int)$psc >= 1 && (int)$psc <= 12) )  ){
  			$indiv_forms[]= array('form_code'=>'f31', 'form_title'=> 'Form 3.1 - Maternal Health and Nutrition: Mother\'s Knowledge, Health Seeking Behaviors and Practice','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f31'));	
  		}

		if($age<2){
			$indiv_forms[]= array('form_code'=>'f41', 'form_title'=> 'Form 4.1 - Birthweight and Related Infromation of Children, 0-71 Months','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f41'));
			$indiv_forms[]= array('form_code'=>'f42', 'form_title'=> 'Form 4.2 - Infant and Young Child Feeding Practices of Children, 0-23 Months','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f42'));	
			$indiv_forms[]= array('form_code'=>'f43', 'form_title'=> 'Form 4.3 - Government Program Participation of Children, 0-23 Months','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f42'));	
			$indiv_forms[]= array('form_code'=>'f45', 'form_title'=> 'Form 4.5 - Participation of Children in Complete Treatment Pack Program, 0-71 Months Old','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f45'));	
		}

		if($age>=2 && $age<6){
			$indiv_forms[]= array('form_code'=>'f41', 'form_title'=> 'Form 4.1 - Birthweight and Related Infromation of Children, 0-71 Months','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f41'));
          	$indiv_forms[]= array('form_code'=>'f44', 'form_title'=> 'Form 4.4 - Government Program Participation of Children, 24-71 Months','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f44'));	
			$indiv_forms[]= array('form_code'=>'f45', 'form_title'=> 'Form 4.5 - Participation of Children in Complete Treatment Pack Program, 0-71 Months Old','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f45'));	
		}

  		if( $age <= 3 ){
			$indiv_forms[]= array('form_code'=>'f72', 'form_title'=> 'Form 7.2 - Checklist of Food and Liquid Intake','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f72'));
  		}

		if($age>=6 && $age<13){
			$indiv_forms[]= array('form_code'=>'f47', 'form_title'=> 'Form 4.7 - Government Program Participation of Children, 6-12 Years Old','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f47'));	
     	}

		if($age>=10){
			$indiv_forms[]= array('form_code'=>'f53', 'form_title'=> 'Form 5.3 - Smoking And Alcohol Consumption of 10 Years Old and Above','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f53'));	
		}

		if($age>=15){
			$indiv_forms[]= array('form_code'=>'f49', 'form_title'=> 'Form 4.9 - PhilHealth Coverage, Awareness and Client Satisfaction of 15 Years Old and Above','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f49'));	
			$indiv_forms[]= array('form_code'=>'f56', 'form_title'=> 'Form 5.6 - Usage of Health/Food/Dietary Supplements, 15 years old abd above','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f56'));	
		}
			
		if($age<15){
			$indiv_forms[]= array('form_code'=>'f55', 'form_title'=> 'Form 5.5 - Usage of Health/Food/Dietary Supplements,  0-14.99 Years Old','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f55'));	
		}

		if($age>=18){
			$indiv_forms[]= array('form_code'=>'f46', 'form_title'=> 'Form 4.6 - Participation of Individuals in Complete Treatment Pack Program, 18 Years Old and Above','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f46'));	
			$indiv_forms[]= array('form_code'=>'f48', 'form_title'=> 'Form 4.8 - Knowledge and Practice in Reading Product Labels of Packaged Foods and Beverages, 18 Years and Above','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f48'));	
			$indiv_forms[]= array('form_code'=>'f52', 'form_title'=> 'Form 5.2 - History of Raised Blood Pressure and Diabetes questionnaire of 18 Years Old and Above','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f52'));	
			$indiv_forms[]= array('form_code'=>'f54', 'form_title'=> 'Form 5.4 - Physical Activity of 18 Years Old and Above','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f54'));	
			$indiv_forms[]= array('form_code'=>'f57', 'form_title'=> 'Form 5.7 - FFQ for 18 Years Old and Above','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f57'));	
		}

		if($age>=60){
			$indiv_forms[]= array('form_code'=>'f410', 'form_title'=> 'Form 4.10 - Participation of Individual Members, 60 Years Old and Above to Senior Citizen Program','member'=>$member,'memkey'=>$memkey, 'exist'=>$this->withFormRecord($member,'f410'));	
		}