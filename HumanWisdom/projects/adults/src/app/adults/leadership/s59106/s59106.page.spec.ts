import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59106Page } from './s59106.page';

describe('S59106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59106Page;
  let fixture: ComponentFixture<S59106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
