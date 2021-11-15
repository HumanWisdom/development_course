import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59167Page } from './s59167.page';

describe('S59167Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59167Page;
  let fixture: ComponentFixture<S59167Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59167Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59167Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
