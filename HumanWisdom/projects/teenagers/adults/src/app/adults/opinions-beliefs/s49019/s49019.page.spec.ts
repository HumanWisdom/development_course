import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49019Page } from './s49019.page';

describe('S49019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49019Page;
  let fixture: ComponentFixture<S49019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
