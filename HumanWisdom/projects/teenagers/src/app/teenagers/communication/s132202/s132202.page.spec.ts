import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132202Page } from './s132202.page';

describe('S132202Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132202Page;
  let fixture: ComponentFixture<S132202Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132202Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132202Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
