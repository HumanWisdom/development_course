import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134188tPage } from './s134188t.page';

describe('S134188tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134188tPage;
  let fixture: ComponentFixture<S134188tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134188tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134188tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
