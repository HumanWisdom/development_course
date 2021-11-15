import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59076Page } from './s59076.page';

describe('S59076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59076Page;
  let fixture: ComponentFixture<S59076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
