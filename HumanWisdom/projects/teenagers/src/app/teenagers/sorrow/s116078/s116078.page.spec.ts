import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116078Page } from './s116078.page';

describe('S116078Page', () => {
      
    let component:  S116078Page;
  let fixture: ComponentFixture<S116078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
