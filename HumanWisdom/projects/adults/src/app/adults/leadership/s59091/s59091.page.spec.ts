import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59091Page } from './s59091.page';

describe('S59091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59091Page;
  let fixture: ComponentFixture<S59091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
