import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59075Page } from './s59075.page';

describe('S59075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59075Page;
  let fixture: ComponentFixture<S59075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
