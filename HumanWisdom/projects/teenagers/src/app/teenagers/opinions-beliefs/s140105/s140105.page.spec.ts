import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140105Page } from './s140105.page';

describe('S140105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140105Page;
  let fixture: ComponentFixture<S140105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
