import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62074Page } from './s62074.page';

describe('S62074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62074Page;
  let fixture: ComponentFixture<S62074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
