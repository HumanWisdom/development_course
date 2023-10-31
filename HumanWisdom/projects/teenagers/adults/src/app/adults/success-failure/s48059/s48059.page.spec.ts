import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48059Page } from './s48059.page';

describe('S48059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48059Page;
  let fixture: ComponentFixture<S48059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
