import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import AIRLINES_OBJECT from '@salesforce/schema/Airlines__c';
import NAME_FIELD from '@salesforce/schema/Airlines__c.Name';
import COUNTRY_FIELD from '@salesforce/schema/Airlines__c.Country__c';
import SLOGAN_FIELD from '@salesforce/schema/Airlines__c.Slogan__c';
import HQ_FIELD from '@salesforce/schema/Airlines__c.Head_Quaters__c';
import EST_FIELD from '@salesforce/schema/Airlines__c.Established__c';

export default class RecordEditFormAirlines extends LightningElement {
    recordId = "a0B4x00000LsNZoEAN";
    objectName = AIRLINES_OBJECT;
    fields = {
        name: NAME_FIELD,
        country: COUNTRY_FIELD,
        slogan: SLOGAN_FIELD,
        hq: HQ_FIELD,
        est: EST_FIELD
    };

    successHandler() {
        const successToast = new ShowToastEvent({
            title: "Success",
            message: "The Airlines record has been saved successfully!",
            variant: "success"
        });
        this.dispatchEvent(successToast);
    }
}