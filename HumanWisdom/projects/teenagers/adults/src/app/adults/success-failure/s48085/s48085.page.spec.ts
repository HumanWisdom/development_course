import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48085Page } from './s48085.page';

describe('S48085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48085Page;
  let fixture: ComponentFixture<S48085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
