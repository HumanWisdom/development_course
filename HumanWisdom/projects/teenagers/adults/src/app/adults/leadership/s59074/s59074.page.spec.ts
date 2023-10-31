import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59074Page } from './s59074.page';

describe('S59074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59074Page;
  let fixture: ComponentFixture<S59074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
