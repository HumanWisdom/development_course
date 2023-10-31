import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61023Page } from './s61023.page';

describe('S61023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61023Page;
  let fixture: ComponentFixture<S61023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
