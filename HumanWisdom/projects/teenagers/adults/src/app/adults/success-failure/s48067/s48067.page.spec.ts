import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48067Page } from './s48067.page';

describe('S48067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48067Page;
  let fixture: ComponentFixture<S48067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
