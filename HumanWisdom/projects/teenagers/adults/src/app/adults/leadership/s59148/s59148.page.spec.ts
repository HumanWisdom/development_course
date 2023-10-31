import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59148Page } from './s59148.page';

describe('S59148Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59148Page;
  let fixture: ComponentFixture<S59148Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59148Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59148Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
