import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132243Page } from './s132243.page';

describe('S132243Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132243Page;
  let fixture: ComponentFixture<S132243Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132243Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132243Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
