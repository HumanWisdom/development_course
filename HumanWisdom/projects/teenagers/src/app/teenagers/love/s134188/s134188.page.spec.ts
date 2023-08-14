import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134188Page } from './s134188.page';

describe('S134188Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134188Page;
  let fixture: ComponentFixture<S134188Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134188Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134188Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
