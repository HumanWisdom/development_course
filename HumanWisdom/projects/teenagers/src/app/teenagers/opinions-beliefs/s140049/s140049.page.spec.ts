import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140049Page } from './s140049.page';

describe('S140049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140049Page;
  let fixture: ComponentFixture<S140049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
