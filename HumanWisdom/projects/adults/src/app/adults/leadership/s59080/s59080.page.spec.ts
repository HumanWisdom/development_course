import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59080Page } from './s59080.page';

describe('S59080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59080Page;
  let fixture: ComponentFixture<S59080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
