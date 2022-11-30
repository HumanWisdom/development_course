import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59023Page } from './s59023.page';

describe('S59023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59023Page;
  let fixture: ComponentFixture<S59023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
