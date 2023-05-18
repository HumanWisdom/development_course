import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116044Page } from './s116044.page';

describe('S116044Page', () => {
      
    let component:  S116044Page;
  let fixture: ComponentFixture<S116044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
