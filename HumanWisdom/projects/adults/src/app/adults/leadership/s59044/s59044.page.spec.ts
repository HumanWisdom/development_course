import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59044Page } from './s59044.page';

describe('S59044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59044Page;
  let fixture: ComponentFixture<S59044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
