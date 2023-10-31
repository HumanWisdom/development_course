import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59006Page } from './s59006.page';

describe('S59006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59006Page;
  let fixture: ComponentFixture<S59006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
