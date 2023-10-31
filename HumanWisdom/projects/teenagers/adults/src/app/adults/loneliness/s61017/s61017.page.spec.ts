import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61017Page } from './s61017.page';

describe('S61017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61017Page;
  let fixture: ComponentFixture<S61017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
