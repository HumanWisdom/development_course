import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134185Page } from './s134185.page';

describe('S134185Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134185Page;
  let fixture: ComponentFixture<S134185Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134185Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134185Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
