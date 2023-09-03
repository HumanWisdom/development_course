import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140055Page } from './s140055.page';

describe('S140055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140055Page;
  let fixture: ComponentFixture<S140055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
