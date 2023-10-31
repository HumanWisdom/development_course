import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48052Page } from './s48052.page';

describe('S48052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48052Page;
  let fixture: ComponentFixture<S48052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
