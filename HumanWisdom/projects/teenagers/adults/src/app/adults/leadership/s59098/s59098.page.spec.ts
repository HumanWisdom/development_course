import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59098Page } from './s59098.page';

describe('S59098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59098Page;
  let fixture: ComponentFixture<S59098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
