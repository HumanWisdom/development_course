import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53153Page } from './s53153.page';

describe('S53153Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53153Page;
  let fixture: ComponentFixture<S53153Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53153Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53153Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
