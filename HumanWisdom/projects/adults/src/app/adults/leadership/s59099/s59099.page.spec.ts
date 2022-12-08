import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59099Page } from './s59099.page';

describe('S59099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59099Page;
  let fixture: ComponentFixture<S59099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
