import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59029Page } from './s59029.page';

describe('S59029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59029Page;
  let fixture: ComponentFixture<S59029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
