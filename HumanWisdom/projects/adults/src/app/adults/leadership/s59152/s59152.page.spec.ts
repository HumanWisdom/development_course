import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59152Page } from './s59152.page';

describe('S59152Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59152Page;
  let fixture: ComponentFixture<S59152Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59152Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59152Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
