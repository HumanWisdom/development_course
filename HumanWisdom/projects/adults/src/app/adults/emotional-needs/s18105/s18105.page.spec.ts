import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18105Page } from './s18105.page';

describe('S18105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18105Page;
  let fixture: ComponentFixture<S18105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
